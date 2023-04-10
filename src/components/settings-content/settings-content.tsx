import React, { useEffect } from "react";
import "./settings-content.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { GameState } from "../../state/reducers/gameState.interface";
import RippleEffect from "../shared/RippleEffect/RippleEffect";
import { bindActionCreators } from "redux";
import * as GameActions from "../../state/actions/gameActions";
import GridList from "../shared/grid-list/grid-list";
export interface GridItem {
  id: string;
  title: string;
  subTitle: string;
}
export default function SettingsContent() {
  const languagesMock: GridItem[] = [
    {
      title: "English",
      id: "us",
      subTitle: "United States",
    },
    {
      title: "Deutsch",
      id: "de",
      subTitle: "Germany",
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
      title: "Italiano",
      id: "it",
      subTitle: "Italy",
    },
    {
      title: "Nederlands",
      id: "nl",
      subTitle: "Netherlands",
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
      title: "Türkçe",
      id: "tr",
      subTitle: "Turkey",
    },
    {
      title: "中文",
      id: "zh",
      subTitle: "China",
    },
    {
      title: "日本語",
      id: "ja",
      subTitle: "Japan",
    },
    {
      title: "한국어",
      id: "ko",
      subTitle: "Korea",
    },
  ];
  const [languages, setLanguages] = React.useState<GridItem[]>([]);
  const game: GameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const { setGameLanguage } = bindActionCreators(GameActions, dispatch);

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

  return (
    <div>
      <GridList
        data={languages}
        title="Languages"
        selectedId={game.language}
        onElementClick={onLanguageSelect}
      />
    </div>
  );
}
