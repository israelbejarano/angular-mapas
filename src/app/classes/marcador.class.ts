// export class Marcador {
    // constructor(public lat: number, public lng: number) {}
// }

// lo de arriba hace lo mismo que lo de abajo pero queda mas estructurado para entender el codigo

export class Marcador {
    public lat: number;
    public lng: number;
    public titulo = 'sin titulo';
    public descripcion = 'sin descripcion';
    constructor(lat: number, lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }
}
