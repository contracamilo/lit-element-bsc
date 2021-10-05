import { css } from "lit";



export default css`
    :host {
    text-align: center;
    }

    main{

    width: 80vw;
    margin: 0 auto;
    }

    .grid-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
    gap: 2rem;
    }

    .card{
    background-color: #fff;
    border-radius: 0.4rem;
    overflow: hidden;
    }

    .card__text{
    padding: 0.5rem 1rem 2rem 1rem;
    text-align: left;
    }

    h3{
    margin: 0;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    color: #777;
    }

    p{
    color: rgb(37, 29, 29);
    margin: 0;
    padding: 0;
    }

    get-data{
    display:none;
    }

    @media only screen and (max-width: 600px) {
        main{
            width: 100%;
        }
        
        .grid-container{
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
        }

        img{
            width: 100%;
            height: auto;
        }
    }
`;