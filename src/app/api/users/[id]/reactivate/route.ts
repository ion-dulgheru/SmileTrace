import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { userService } from '@/services/user.service';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden. Admin access required.' }, { status: 403 });
    }
    const user = await userService.reactivateUser(id);
    console.log(`User reactivated by admin: ${session.user.email} - Reactivated user: ${user.email}`);
    return NextResponse.json({ data: user, message: 'User reactivated successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('Error reactivating user:', error);
    return NextResponse.json({ error: 'Failed to reactivate user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}