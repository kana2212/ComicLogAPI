import React from "react";
import Header from "../atoms/layout/Header";

export const Top = () => {
    return (
        <div className="firstview">

            <div className="overlay-text">
                <h1>どこまでよんだ？</h1>
                <p>読んだ漫画のサービス名、タイトル、巻数を記録しよう</p>
            </div>
            <Header />
        </div>
    )
};

export default Top;