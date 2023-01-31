import { ipcMainSend } from '@main/utils/ipc-main'
import type { MessageOptions } from 'naive-ui/lib/message/index'

export default {
  message: (message: string, options: MessageOptions = {}) => ipcMainSend('renderer.WindowManager:showMessage', {
    message,
    options
  })
}
