import { db } from "@/lib/db";
import * as z from 'zod';

import { createActivity } from "@/lib/activity";
import { currentUser } from "@/lib/auth";
import { ActivitySchema } from "@/schemas";



export const updateActivity = async (
    activityId: string, updatedData: Partial<z.infer<typeof ActivitySchema>>) => {
    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    try {
        const updatedActivity = await db.userActivity.update({
            where: { id: activityId },
            data: {
                ...updatedData,
            },
        });

        await createActivity(user.id as string, "Updated activity");

        return { success: "Activity updated successfully", updatedActivity };
    } catch (error) {
        console.error("Error updating activity:", error);
        return { error: "Failed to update activity" };
    }
};