import { Controller, Module, Get } from "@nestjs/common";

@Controller()
class AppController {
    @Get()
    getRouteController() {
        return "hi there!";
    }
}