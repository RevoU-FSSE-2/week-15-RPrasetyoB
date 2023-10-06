const clientAccess = {
    limitedClient : {
        // origin: 'https://week15-rpb-x.netlify.app/',
        origin: ['http://localhost:5173', 'http://localhost:5173/add', 'https://week15-rpb-y.netlify.app/'],
        methods: ['GET', 'POST']
    },
    globalClient : {
        origin: 'https://week15-rpb-y.netlify.app/',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
}

export default clientAccess