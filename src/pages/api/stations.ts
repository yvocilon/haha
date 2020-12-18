export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify([
            {
                stationId: 4223,
                name: "Station 42-23",
                address: "Address 42-23",
                siteQualifier: null,
                latitude: 42.0,
                longitude: 23.0,
            },
            {
                stationId: 4224,
                name: "Station 42-24",
                address: "Address 42-24",
                siteQualifier: null,
                latitude: 42.3,
                longitude: 23.4,
            },
            {
                stationId: 42251,
                name: "Station 42-25-1",
                address: "Address 42-25",
                siteQualifier: "A",
                latitude: 42.5,
                longitude: 25.6,
            },
            {
                stationId: 42252,
                name: "Station 42-25-2",
                address: "Address 42-25",
                siteQualifier: "B",
                latitude: 42.5,
                longitude: 25.6,
            },
        ])
    );
}
