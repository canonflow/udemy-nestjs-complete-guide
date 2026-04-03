import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/test')
    getRouteController() {
        return "hi there!";
    }

    @Get('/bye')
    getByeController() {
        return "by there!";
    }
}