import React, { useEffect } from "react";
import "./settings-content.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { GameState } from "../../state/reducers/gameState.interface";
import { bindActionCreators } from "redux";
import * as GameActions from "../../state/actions/gameActions";
import GridList from "../shared/grid-list/grid-list";

import { ReactComponent as LightIcon } from "../../assets/icons/light_theme.svg";
import { ReactComponent as DarkIcon } from "../../assets/icons/dark_theme.svg";
import { ReactComponent as SystemIcon } from "../../assets/icons/system_theme.svg";
import SegmentedButton, {
  SegmentedButtonItem,
} from "../shared/segmented-button/segmented-button";

export interface GridItem {
  id: string;
  title: string;
  subTitle: string;
}
export default function SettingsContent() {
  const languagesMock: GridItem[] = [
    {
      title: "العربية",
      id: "ar",
      subTitle: "Saudi Arabia",
    },
    {
      title: "Dansk",
      id: "da",
      subTitle: "Denmark",
    },
    {
      title: "Deutsch",
      id: "de",
      subTitle: "Germany",
    },
    {
      title: "English (Australia)",
      id: "en-au",
      subTitle: "Australia",
    },
    {
      title: "English (Canada)",
      id: "en-ca",
      subTitle: "Canada",
    },
    {
      title: "English (United Kingdom)",
      id: "en-gb",
      subTitle: "United Kingdom",
    },
    {
      title: "English (United States)",
      id: "en-us",
      subTitle: "United States",
    },
    {
      title: "Español",
      id: "es",
      subTitle: "Spain",
    },
    {
      title: "Français",
      id: "fr",
      subTitle: "France",
    },
    {
      title: "Magyar",
      id: "hu",
      subTitle: "Hungary",
    },
    {
      title: "Italiano",
      id: "it",
      subTitle: "Italy",
    },
    {
      title: "日本語",
      id: "ja",
      subTitle: "Japan",
    },
    {
      title: "Nederlands",
      id: "nl",
      subTitle: "Netherlands",
    },
    {
      title: "Norsk",
      id: "no",
      subTitle: "Norway",
    },
    {
      title: "Polski",
      id: "pl",
      subTitle: "Poland",
    },
    {
      title: "Português",
      id: "pt",
      subTitle: "Portugal",
    },
    {
      title: "Русский",
      id: "ru",
      subTitle: "Russia",
    },
    {
      title: "Suomi",
      id: "fi",
      subTitle: "Finland",
    },
    {
      title: "Svenska",
      id: "sv",
      subTitle: "Sweden",
    },
    {
      title: "Türkçe",
      id: "tr",
      subTitle: "Turkey",
    },
    {
      title: "中文",
      id: "zh",
      subTitle: "China",
    },
  ];
  const themeMock: SegmentedButtonItem[] = [
    {
      id: "light",
      children: (
        <>
          <LightIcon></LightIcon>
          <span>Light</span>
        </>
      ),
    },
    {
      id: "system",
      children: (
        <>
          <SystemIcon></SystemIcon>
          <span>System</span>
        </>
      ),
    },
    {
      id: "dark",
      children: (
        <>
          <DarkIcon></DarkIcon>
          <span>Dark</span>
        </>
      ),
    },
  ];
  const [languages, setLanguages] = React.useState<GridItem[]>([]);
  const game: GameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const { setGameLanguage, setGameTheme } = bindActionCreators(
    GameActions,
    dispatch
  );

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    Promise.resolve(languagesMock).then((languages) => {
      setLanguages(languages);
      setLoading(false);
    });
  }, []);

  const onLanguageSelect = (code: string) => {
    setGameLanguage(code);
  };
  const onThemeChange = (theme: string) => {
    console.log(theme);
    setGameTheme(theme);
  };

  return (
    <div>
      <h1>Settings</h1>
      <div className="settings-item">
        <h2>Theme</h2>
        <SegmentedButton
          selectedItem={game.theme}
          items={themeMock}
          onChange={onThemeChange}
        />
      </div>
      <div className="settings-item">
        <h2>Languages</h2>
        <GridList
          data={languages}
          selectedId={game.language}
          onElementClick={onLanguageSelect}
        />
      </div>
    </div>
  );
}
