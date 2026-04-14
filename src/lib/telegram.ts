interface LeadNotification {
  name: string;
  phone: string;
  course?: string;
  branch?: string;
  message?: string;
  source: string;
}

export async function sendTelegramNotification(lead: LeadNotification) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram credentials not configured, skipping notification");
    return;
  }

  const text = [
    "\u{1F4CB} *Новая заявка с сайта!*",
    "",
    `\u{1F464} *Имя:* ${lead.name}`,
    `\u{1F4DE} *Телефон:* ${lead.phone}`,
    lead.course ? `\u{1F4DA} *Курс:* ${lead.course}` : null,
    lead.branch ? `\u{1F4CD} *Филиал:* ${lead.branch}` : null,
    lead.message ? `\u{1F4AC} *Комментарий:* ${lead.message}` : null,
    "",
    `\u{1F517} *Источник:* ${lead.source}`,
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });
}
