export async function GET() {
    const tickets = [
        {
            id: 't-1001',
            title: "Cannot connect to VPN",
            description: "User reports intermittent VPN connectivity errors.",
            priority: "High",
            status: 'Open',
            assignee: "Unassigned",
            updatedAt: '2025-10-31T14:05:00Z'
        },

        {
            id: 't-1002',
            title: 'Email not syncing on mobile',
            description: 'Outlook app not updating emails for user.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Sarah Lopez',
            updatedAt: '2025-10-30T09:12:00Z',
        },

        {
            id: 't-1003',
            title: "WiFi won't connect",
            description: "User reports WiFi connection issues.",
            priority: "Medium",
            status: 'Open',
            assignee: "Unassigned",
            updatedAt: '2025-10-22T13:15:00Z'
        },

         {
            id: 't-1004',
            title: "Password Reset Loop",
            description: "User is stuck in reset loop after MFA enrollment.",
            priority: "High",
            status: 'On Hold',
            assignee: "Alex Chen",
            updatedAt: '2025-10-29T11:05:00Z'
        },
        
         {
            id: 't-1005',
            title: "Teams audio issue",
            description: "Audio crackling for external calls.",
            priority: "Medium",
            status: 'Open',
            assignee: "Unassigned",
            updatedAt: '2025-10-28T06:05:00Z'
        },

         {
            id: 't-1006',
            title: "Wi-Fi coverage dead zone",
            description: "Conference room B reports frequent drops.",
            priority: "High",
            status: 'In Progress',
            assignee: "Jordan Kim",
            updatedAt: '2025-10-31T08:40:00Z'
        },

         {
            id: 't-1007',
            title: "SaaS license overage alert",
            description: "Exceeded plan; needs review.",
            priority: "Medium",
            status: 'On Hold',
            assignee: "Alex Chen",
            updatedAt: '2025-10-30T12:18:00Z'
        },

         {
            id: 't-1008',
            title: "MacOS update failing",
            description: "M1 devices stuck at 20% during update.",
            priority: "High",
            status: 'Open',
            assignee: "Unassigned",
            updatedAt: '2025-10-31T10:15:00Z'
        },

         {
            id: 't-1009',
            title: "Broken USB-C desk dock",
            description: "Ports on the right side not detecting devices.",
            priority: "Low",
            status: 'Resolved',
            assignee: "Tom Jack",
            updatedAt: '2025-10-25T11:05:00Z'
        },

         {
            id: 't-1010',
            title: "OKTA login latency",
            description: "Users see 10-15s delay",
            priority: "High",
            status: 'On Hold',
            assignee: "Jordan Kim",
            updatedAt: '2025-10-30T18:05:00Z'
        },

         {
            id: 't-1011',
            title: "Team member password reset.",
            description: "Team member 323 needs a password reset.",
            priority: "Low",
            status: 'Resolved',
            assignee: "Tim Chen",
            updatedAt: '2025-10-31T06:05:00Z'
        },

        {
            id: 't-1012',
            title: 'SFTP nightly job failure',
            description: 'Transfer fails on authentication step.',
            priority: 'Critical',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-31T05:05:00Z',
    },
    ];
    return Response.json(tickets);
}