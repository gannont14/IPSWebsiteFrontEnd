export const fetchWithTokenRefresh = async (url, options) => {
  let response = await fetch(url, options);

  if (response.status === 401) {
    // Token might be expired, attempt to refresh
    console.log('Token expired, refreshing token');
    const refreshResponse = await fetch('/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: localStorage.getItem('refresh_token'),
      }),
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      localStorage.setItem('access_token', refreshData.access);

      // Retry the original request with the new token
      options.headers['Authorization'] = `Bearer ${refreshData.access}`;
      response = await fetch(url, options);
    } else {
      // If refresh fails, log out the user or handle the error appropriately
      alert('Session expired. Please log in again.');
      // Optional: redirect to login page or log out
    }
  }

  return response;
};
