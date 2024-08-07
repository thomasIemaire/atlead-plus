const appearance = {
    options: {
        banner: true
    },
    widgets: [
        {
            id: "home",
            widgets: [
                {
                    x: 0,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:income",
                    rule: "income",
                    noResize: true
                },
                {
                    x: 3,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:customers",
                    rule: "customers",
                    noResize: true
                },
                {
                    x: 0,
                    y: 3,
                    w: 3,
                    h: 4,
                    id: "next-event:???",
                    rule: "???",
                    noResize: true
                }
            ]
        },
        {
            id: "planning",
            widgets: [
                {
                    x: 0,
                    y: 0,
                    w: 9,
                    h: 10,
                    id: "long-planning:???",
                    rule: "???",
                    noResize: true
                },
                {
                    x: 9,
                    y: 0,
                    w: 3,
                    h: 6,
                    id: "calendar:???",
                    rule: "???",
                    noResize: true
                },
                {
                    x: 9,
                    y: 6,
                    w: 3,
                    h: 4,
                    id: "next-event:???",
                    rule: "???",
                    noResize: true
                }
            ]
        },
        {
            id: "wallet",
            widgets: [
                {
                    x: 0,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:income",
                    rule: "income",
                    noResize: true
                },
                {
                    x: 3,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:forecasts",
                    rule: "forecasts",
                    noResize: true
                },
                {
                    x: 6,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:average",
                    rule: "average",
                    noResize: true
                },
                {
                    x: 9,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:costs",
                    rule: "costs",
                    noResize: true
                },
                {
                    x: 0,
                    y: 3,
                    w: 6,
                    h: 7,
                    id: "long-chart:???",
                    rule: "???",
                    noResize: true
                },
                {
                    x: 6,
                    y: 3,
                    w: 3,
                    h: 7,
                    id: "short-chart:plans",
                    rule: "plans",
                    noResize: true
                },
                {
                    x: 9,
                    y: 3,
                    w: 3,
                    h: 7,
                    id: "short-chart:costs",
                    rule: "costs",
                    noResize: true
                }
            ]
        },
        {
            id: "customer",
            widgets: [
                {
                    x: 0,
                    y: 0,
                    w: 3,
                    h: 3,
                    id: "simple-card:customers",
                    rule: "customers",
                    noResize: true
                }
            ]
        }
    ]
}

export { appearance };