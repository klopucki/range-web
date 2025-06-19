import {AppEvent} from "../types/events/appEvent.ts";

export const news: AppEvent[] = [
    {
        id: 1,
        title: "React 19 Released",
        subtitle: "Next-gen features for faster apps",
        description: "React 19 introduces Suspense improvements, Server Components, and a refreshed dev experience. Learn what's new.",
        image: "https://picsum.photos/300/200?random=1",
        date: new Date("2025-07-01"),
        location: "Strzelnica Fun Gun",
        locationLink: "https://react.dev",
        organizer: "Klub Strzelecki Fun Gun",
        tags: ["react", "frontend", "release"],
        lat: 51.22327757736778,
        lon: 22.695834752296154
    },
    {
        id: 2,
        title: "National Shooting Championship 2025",
        subtitle: "Compete with the best",
        description: "Join elite marksmen and women for the ultimate national-level shooting competition. Categories include pistol, rifle, and airgun. Join https://localhost:49323/competitions/2 to register.",
        image: "https://picsum.photos/300/200?random=2",
        date: new Date("2025-08-15"),
        location: "Warsaw Shooting Range, Poland",
        locationLink: "https://goo.gl/maps/ShootingRangeWarsaw",
        organizer: "Polish Shooting Federation",
        tags: ["shooting", "championship", "sports"]
    },
    {
        id: 3,
        title: "Fun Gun Summer Fest",
        subtitle: "Family-friendly shooting & fun",
        description: "A relaxed shooting weekend with barbecue, beginner-friendly workshops, and fun games for all ages.",
        image: "https://picsum.photos/300/200?random=3",
        date: new Date("2025-07-20"),
        location: "Green Valley Range",
        locationLink: "https://goo.gl/maps/GreenValleyFunGun",
        organizer: "Fun Gun Club",
        tags: ["family", "fun", "festival"]
    },
    {
        id: 4,
        title: "Tactical Combat Course",
        subtitle: "Master close-quarters combat skills",
        description: "A full-day intensive course in tactical shooting, movement, and decision-making. Taught by former military instructors.",
        image: "https://picsum.photos/300/200?random=4",
        date: new Date("2025-09-05"),
        location: "Delta Training Grounds",
        locationLink: "https://deltatraining.com",
        organizer: "Delta Tactical",
        tags: ["training", "tactical", "professional"]
    },
    {
        id: 5,
        title: "Youth Shooting League Finals",
        subtitle: "The next generation of sharpshooters",
        description: "Watch the nation's top junior shooters battle it out in a high-stakes final. Spectators welcome!",
        image: "https://picsum.photos/300/200?random=5",
        date: new Date("2025-08-10"),
        location: "Youth Sports Complex, Krakow",
        locationLink: "https://goo.gl/maps/KrakowYouthSports",
        organizer: "Junior Marksmen Association",
        tags: ["youth", "competition", "education"]
    },
    {
        id: 6,
        title: "Precision Rifle Workshop",
        subtitle: "Sharpen your long-range skills",
        description: "A two-day clinic focused on precision rifle techniques including wind reading, zeroing, and scope adjustment.",
        image: "https://picsum.photos/300/200?random=6",
        date: new Date("2025-10-01"),
        location: "High Ridge Shooting Grounds",
        locationLink: "https://highridgeprecision.com",
        organizer: "Precision Shooting Academy",
        tags: ["precision", "rifle", "training"]
    }
];