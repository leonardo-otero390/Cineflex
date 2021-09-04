import { MoviePoster } from "./shared/MoviePoster";
import styled from "styled-components";
export default function Footer() {
    return (
        <MovieInfos>
            <MoviePoster footer={true}>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" />
            </MoviePoster>
            <MovieTitle>Enola Holmes<br/>Quinta-feira - 15:00
            </MovieTitle>
        </MovieInfos>
    );
}
const MovieInfos = styled.footer`
 width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: #dfe6ed;
    border: 1px solid #9eadba;
 `
const MovieTitle = styled.h1`
    margin-left: 14px;
    font-size: 26px;
    color: #293845;
  `