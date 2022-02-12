import useSWR from 'swr'
import {useState} from 'react'
import { useForm } from 'react-hook-form'

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:''})

    const {data, error} = useSWR(state.url, async (u) => {

        if (!state.url || !state.titleSearchString) return {Search:''}

        if (state.url === '' || state.titleSearchString ==='') return {Search:''}

        const res = await fetch(`${state.url}/?apiKey=5c658291&s=${state.titleSearchString}`)

        const json = await res.json();

        return json;

    })

    const onClickHandler = e => {

        e.preventDefault()

        let s = document.getElementById('titleSearchString').value

        if (state.url === '') {

            setState({url:'http://www.omdbapi.com',titleSearchString:s})

        }

        else setState({url:'',titleSearchString: state.titleSearchString})

    }



    return (

        <div>

            <TheForm/>

            <TheLink url={state.url} handler={onClickHandler} />

            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />

        

        </div>

    )

}


export function TheMovies({data,show}){

    if (!show) return (<div></div>)

    if (!data) return (<div></div>)

    if (data.error) return (<div>falha na pesquisa</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    if(data.Response == 'False') return (<div>Pesquisa Não encontrada, tente novamente.</div>)

    return (

        <div>

            { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}
export function TheForm({filtro, url, acao}){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            
            <form  onSubmit={handleSubmit(acao)}>
                <label htmlFor="titleSearchString">{filtro}</label>
                <input id="titleSearchString" {...register("titleSearchString", { required: true, minLength: 3})} type="text" autoComplete="true"/>
                <button type='submit'>{url === '' ? 'Mostrar' : 'Ocultar'}</button>
                {errors.titleSearchString && <span>Insira no mínimo três caracteres   </span>}
            </form>
        </div>
    )
}
export function TheLink({url, handler}){

    return (

        <div>

            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}