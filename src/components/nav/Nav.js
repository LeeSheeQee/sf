import React, {Component} from 'react';
import style from './Nav.css'
import { BrowserRouter, Route, link, Switch, Redirect } from 'react-router-dom'

import logo from './../../logo-b.svg'
import x from './../../index.css'


class Nav extends Component {
    render() {
        return (
            <div className={style.nav}>
                <section>
                    <div className={style.logo}>
                        <a href="">
                            <img src= {logo} alt=""/>
                            <div>
                                <img src= {process.env.PUBLIC_URL + '/sf.gg-tip@2x.png'} alt=""/>
                            </div>
                        </a>
                    </div>
                    <ul className={style.menu}>
                        <li>
                            <a href="/" className="active-color">首页</a>
                        </li>
                        <li>
                            <a href="/ask">问答</a>
                        </li>
                        <li>
                            <a href="/column">专栏</a>
                        </li>
                        <li>
                            <a href="/classroom">讲堂</a>
                        </li>
                        <li>
                            <a href="/discover">发现</a>
                        </li>
                    </ul>
                    <div className={style.login}>
                        <a href="" className={style.loginBtn}>立即登录</a>
                        <a href="" className={style.register}>免费注册</a>
                    </div>
                    <div className={style.search}>
                        <form action="">
                            <input type="text" placeholder="搜索问题或关键词"/>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Nav;