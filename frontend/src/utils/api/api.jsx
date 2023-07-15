import URLS from './urls';

export async function sendFeedback(
  data,
  onLoad,
  onSubmit,
  onSuccess,
  onResetForm
) {
  try {
    onLoad(true);

    const response = await fetch(`${URLS.base}${URLS.endpoints.feedback}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSuccess(true);
      onResetForm();
    } else {
      Promise.reject(new Error(`Ошибка ${response.status}`));
    }
  } catch (err) {
    console.error(
      `Ошибка в процессе отправки данных из формы обратной связи на сервер: ${err}`
    );
  } finally {
    onLoad(false);
    onSubmit(false);
  }
}
