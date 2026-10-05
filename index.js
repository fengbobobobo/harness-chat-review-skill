import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
export const name = 'schedule-notebook-chat-review'
export const inject = ['skills']
export function apply(ctx) {
  ctx.skills.register({
    name: 'wechat-conversation-review',
    description: '通过 Windows 微信、钉钉或QQ桌面读取指定日期的聊天并总结；支持群聊@指定人及@所有人（全员提及包含指定人）的通知、待办与截止时间，QQ支持通用私聊与群聊检索、按需筛选发送者、跳过视频与图片分级阅读；包含低分辨率按页截图、DPI校准和防误发步骤。',
    whenToUse: '用户要求操作微信、钉钉或QQ，查看、整理指定人或群聊的聊天记录、@提及和通知待办，而不是发送消息时；指定人查询必须合并@所有人结果，因为全员提及包含该指定人。',
    source: 'runtime',
    invocation: { modelInvocable: true, userInvocable: true },
    resourceBase: { kind: 'directory', path: fileURLToPath(new URL('.', import.meta.url)) },
    content: readFileSync(new URL('./SKILL.md', import.meta.url), 'utf8'),
  })
}
