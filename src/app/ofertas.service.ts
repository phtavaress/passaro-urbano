import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Oferta } from "./shared/oferta.model";

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas'))
        .then((resposta: any) => resposta);
    }
}