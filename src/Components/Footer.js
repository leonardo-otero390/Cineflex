import { MoviePoster } from "./shared/MoviePoster";
import styled from "styled-components";
export default function Footer({movieInfos}) {
    const {posterURL,title,session} = movieInfos;
    return (
        <MovieInfos>
            <MoviePoster footer={true}>
                <img src={posterURL} alt={title} />
            </MoviePoster>
            <MovieTitle>{title}<br/>{session}
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