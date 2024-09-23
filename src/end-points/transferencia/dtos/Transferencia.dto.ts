export interface TransferenciaDTO {
    meioTransporte: string;
    destino: string;
    medicoDestino: string;
    origem: string;
    medicoOrigem: string;
    medicoRegulador: string;
    horarioSaida: Date;
    horarioPrevistoChegada: Date;
    distancia: number;
    documento: string;
    paciente: string;
    solicitacao: string;
}
