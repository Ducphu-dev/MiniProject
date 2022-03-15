import { Divider, Tabs } from 'antd';
import * as React from 'react';
import BtnSearch from '../../Assets/images/header/btn_search.png';
import Stage from '../../Assets/images/header/logo-stage.svg';
import Logo from '../../Assets/images/header/logo.svg';
import MenuHome from '../../Assets/images/header/menu_home.svg';
import MenuToon from '../../Assets/images/header/menu_toon.svg';
import MenuNovel from '../../Assets/images/header/menu_novel.svg';
import MenuVod from '../../Assets/images/header/menu_vod.svg';
import MenuBroadcast from '../../Assets/images/header/menu_broadcast.svg';
import MenuBook from '../../Assets/images/header/menu_book.svg';
import './Header.scss';

const { TabPane } = Tabs;
const tabList = [
  {
    id: 1,
    title: 'home',
    image: MenuHome,
  },
  {
    id: 2,
    title: 'toon',
    image: MenuToon,
  },
  {
    id: 3,
    title: 'novel',
    image: MenuNovel,
  },
  {
    id: 4,
    title: 'vod',
    image: MenuVod,
  },
  {
    id: 5,
    title: 'broadcast',
    image: MenuBroadcast,
  },
  {
    id: 6,
    title: 'broadcast',
    image: MenuBook,
  },
];

function Header(props: any) {
  return (
    <div className="header-wrapper">
      <header id="header" className="header">
        <div className="header-container">
          <div className="logo">
            <img src={Logo} alt="kakaopage logo" />
          </div>

          <div className="menu">
            <div className="search-box">
              <form action="">
                <input className="search-box-input" type="text" />
              </form>
              <div className="search-box-icon">
                <img src={BtnSearch} alt="search button" />
              </div>
            </div>

            <div className="cta">
              <div className="stage">
                <img src={Stage} alt="Stage" />
              </div>
              <div className="cta-gr">
                <div className="cta-link">캐시충전</div>
                <Divider type="vertical" />
                <div className="cta-link">로그인</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header-container">
        <Tabs className="navigation">
          {tabList.map((tab) => {
            return (
              <TabPane
                tab={<img className="navigation-image" src={tab.image} />}
                key={tab.id}
              >
                content {tab.id}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
