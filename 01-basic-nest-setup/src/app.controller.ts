import {Controller, Get} from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRouteController() {
        return "hi there!";
    }
}