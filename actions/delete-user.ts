import { db } from "@/lib/db";

export const deleteUser = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } });

        if (!user) {
            return { error: "User not found!" };
        }
        
        await db.user.deleteMany({ where: { id: user.id } });

        return { success: "User and associated data deleted successfully!" };
    } catch (error) {
        return { error: "Error deleting user!" };
    }
};