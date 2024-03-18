import { db } from "@/lib/db";
import { Activity } from "@/next-auth";

export const createActivity = async (userId: string, action: string) => {
    try {
        const activity = await db.userActivity.create({
            data: {
                userId,
                action,
            },
        });
        console.log('Created activity:', activity);
    } catch (error) {
      return { error: "Failed to create activity" };
    }
}; 

export const getUserActivities = async (userId: string): Promise<Activity[]> => {
    try {
        const activities = await db.userActivity.findMany({
            where: {
                userId,
            },
        });
        return activities;
    } catch (error) {
        return [];
    }
};