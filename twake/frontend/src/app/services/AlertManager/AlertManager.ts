import { Modal } from 'antd';

import Languages from 'services/languages/languages';
import { TwakeService } from '../Decorators/TwakeService';

const { confirm, info } = Modal;

type Options = {
  title?: string;
  text?: string;
};
@TwakeService('Alert')
class AlertService {
  alert(onClose: () => void, options?: Options) {
    info({
      title: options?.title || options?.text || '',
      content: options?.text || '',
      onCancel: onClose,
    });
  }

  confirm(
    onConfirm: () => void,
    onClose: (() => void) | undefined = undefined,
    options?: Options,
  ) {
    confirm({
      title: options?.title || Languages.t('components.alert.confirm'),
      content: options?.text || Languages.t('components.alert.confirm_click'),
      onOk: onConfirm,
      onCancel: onClose,
      cancelButtonProps: onClose ? {} : { style: { display: 'none' } },
    });
  }
}

export default new AlertService();
