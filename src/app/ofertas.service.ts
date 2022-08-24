import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Oferta } from "./shared/oferta.model";

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    getOfertas(): Promise<Oferta[]> {
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
        .then((resposta: any) => resposta);
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
        .then((resposta: any) => resposta);
    }
}