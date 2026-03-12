import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { userService } from '@/services/user.service';
import { z } from 'zod';

const updateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().min(1).optional(),
  role: z.enum(['ADMIN', 'DENTIST', 'ASSISTANT']).optional(),
  licenseNumber: z.string().optional(),
  specialization: z.string().optional(),
  phone: z.string().optional(),
  isActive: z.boolean().optional()
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (session.user.role !== 'ADMIN' && session.user.id !== id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    const user = await userService.getUserById(id);
    return NextResponse.json({ data: user, success: true }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function PUT(
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
    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);
    const updatedUser = await userService.updateUser(id, validatedData);
    console.log(`User updated by admin: ${session.user.email} - Updated user: ${updatedUser.email}`);
    return NextResponse.json({ data: updatedUser, message: 'User updated successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }
    if (error instanceof Error && error.message.includes('not found')) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    if (error instanceof Error && error.message.includes('Email already')) {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to update user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(
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
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 });
    }
    const result = await userService.deleteUser(id);
    return NextResponse.json({ ...result, success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}