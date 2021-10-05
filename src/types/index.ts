export type characterType  = {
    id: number; 
    img: string; 
    name: string; 
    origin: string;
}






export type webResponseType  = {
    created: Date;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {name: string, url: string};
    species: string;
    status: string;
    type: string;
    url: string;
}

export type dataResponseType  = {
    info: number; 
    results: Array<webResponseType>; 
}