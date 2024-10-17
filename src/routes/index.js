import routerParking from "./v1/parkingLot.route.js"
import routerTower from "./v1/tower.route.js"
import routerUser from "./v1/user.route.js"
import routerVehicles from "./v1/vehicles.route.js"

const modules = [routerTower, routerParking, routerUser, routerVehicles]

const routerApp = (app) => {
    modules.forEach(module => {
        app.use('/api/v1/', module)
    })
}

export { routerApp }