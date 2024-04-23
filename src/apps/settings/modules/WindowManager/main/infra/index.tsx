import { SettingsGroup, SettingsOption } from '../../../../components/SettingsBox';
import { GlobalPaddings } from './GlobalPaddings';
import { OthersConfigs } from './Others';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { BorderSettings } from '../../border/infra';
import { ContainerTopBarSettings } from '../../containerTopBar/infra';

import { RootSelectors } from '../../../shared/app/selectors';
import { WManagerSettingsActions } from '../app';

export function WindowManagerSettings() {
  const settings = useSelector(RootSelectors.seelenwm);

  const dispatch = useDispatch();

  const onToggleEnable = (value: boolean) => {
    dispatch(WManagerSettingsActions.setEnable(value));
  };

  return (
    <>
      <SettingsGroup>
        <SettingsOption>
          <div>
            <b>Enable Tiling Window Manager</b>
          </div>
          <Switch checked={settings.enable} onChange={onToggleEnable} />
        </SettingsOption>
      </SettingsGroup>

      <ContainerTopBarSettings />
      <GlobalPaddings />
      <OthersConfigs />
      <SettingsGroup>
        <BorderSettings />
      </SettingsGroup>
    </>
  );
}
