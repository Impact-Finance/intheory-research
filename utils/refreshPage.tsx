const refreshPage = (page: string) => {
  const url = window.location.href;
  const path = url.split('/').slice(-1)[0];
  if (path === page) {
    window.location.reload();
  }
};

export default refreshPage;
