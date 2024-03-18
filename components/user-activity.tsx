"use client";
import { ExtendedUser, Activity } from '@/next-auth';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface UserActivityProps {
    user?: ExtendedUser;
    label: string;
    activities: Activity[];
}

export const UserActivityComponent = ({ user, label, activities }: UserActivityProps) => {
    return (
        <div className="bg-card p-4 rounded-xl w-[600px] shadow-sm">
            <p className="text-2xl font-semibold text-center">
                {label}
            </p>
            <Table className="w-full shadow-md rounded-xl bg-card text-card-foreground">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Timestamp</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="rounded-xl">
                    {activities.map(activity => (
                        <TableRow key={activity.id} className="rounded-xl border-collapse">
                            <TableCell className="font-medium rounded-xl">{user?.name ?? 'Unknown'}</TableCell>
                            <TableCell className="font-medium rounded-xl">{activity.action}</TableCell>
                            <TableCell className="rounded-xl">{activity.timestamp.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};