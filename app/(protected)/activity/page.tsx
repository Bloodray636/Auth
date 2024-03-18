import { currentUser } from "@/lib/auth";
import { UserActivityComponent } from "@/components/user-activity";
import { getUserActivities } from "@/lib/activity";

interface Activity {
    id: string;
    userId: string;
    action: string;
    timestamp: Date;
}

const ActivityPage = async () => {
    const user = await currentUser();
    let activities: Activity[] = []; 

    if (user) {
        activities = await getUserActivities(user.id as string);
    }

    return ( 
        <UserActivityComponent
            label="Server component"
            user={user}
            activities={activities}
        />
    );
}

export default ActivityPage;