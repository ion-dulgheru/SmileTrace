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
    if (session.user.id === id) {
      return NextResponse.json({ error: 'Cannot deactivate your own account' }, { status: 400 });
    }
    const user = await userService.deactivateUser(id);
    console.log(`User deactivated by admin: ${session.user.email} - Deactivated user: ${user.email}`);
    return NextResponse.json({ data: user, message: 'User deactivated successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deactivating user:', error);
    return NextResponse.json({ error: 'Failed to deactivate user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}