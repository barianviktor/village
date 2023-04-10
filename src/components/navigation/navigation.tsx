import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { GameState } from "../../state/reducers/gameState.interface";
import { ReactComponent as SettingsIcon } from "../../assets/icons/tune.svg";
import "./navigation.scss";
import Modal from "../shared/modal/modal";
import IconButton from "../shared/icon-button/icon-button";
import SettingsContent from "../settings-content/settings-content";
import HackerEffect from "../shared/hacker-effect/hacker-effect";
import LinkItem from "../shared/Link/linkItem";
import { LinkTypes } from "../../interfaces/LinkTypes";

export default function Navigation() {
  const game: GameState = useSelector((state: RootState) => state.game);

  const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);

  return (
    <div className="navigation">
      <LinkItem
        href={{
          to: "/asd",
          type: LinkTypes.internal,
          workLikeRegularText: true,
        }}
      >
        <HackerEffect title="VILLAGE" />
      </LinkItem>
      <ul>
        <li>
          <IconButton
            icon={<SettingsIcon />}
            onClick={() => setSettingsModalOpen(true)}
            ripple={true}
            elevation={false}
          />
        </li>
      </ul>
      <Modal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        slideInDirection="bottom"
        slideOutDirection="bottom"
      >
        <SettingsContent />
      </Modal>
    </div>
  );
}
