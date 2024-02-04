// fetch("https://sipd-ri.kemendagri.go.id/api/renja/sub_bl/list_belanja_by_tahun_daerah_unit", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryfPdkFP2NrAcEz7G6",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Microsoft Edge\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY5ODIzNTksImhhc2hlZCI6dHJ1ZSwiaWRfZGFlcmFoIjo0MTYsImlkX2xldmVsIjo1LCJpZF91c2VyIjo1ODB9.Gi0eLRnADeZNUzHtWQiSNFEKgEzEM_ksmlQyu4idsmw",
//     "x-api-key": "ZXlKMGIydGxiaUk2SWxvNGFYZDRUa1ZEWm1SS01YUjJaaUlzSW1sa1gyUmhaWEpoYUNJNk5ERTJMQ0owWVdoMWJpSTZNakF5TkN3aWFXUmZZWEJ3SWpvM09EZ3hNaXdpYVhOZllYQndJam94TENKelpXTnlaWFJmYTJWNUlqb2lXbGhzUzJWdFJsaFZhbEpLWVcwNWNGWnJaRFJWTWtwMFZXcE9VVlpFUW5CVVJVNUxaVzFHV0ZWdVRrcGhiVGx3Vm10a05GSnJPVmRSYkVwUlZrUkNjRlJGVGt0bGJVWllWVzEwU21GdE9YQldhMlF3VlRGS2NrMVhOVkZXUkVKd1ZFVk9TMk5HY0VoVlYyeFFZVlZ3VmxsVVJrdFNNVkpZV1hwc1VWVXdielVpTENKelpXTjFjbWwwZVY5clpYa2lPaUkwTVRaOE1qQXlOSHhOVkdOM1RtcHJNMDlFWjNkTmR6MDlmRVZyZEU1VlNWRlBPV3g4T0RZMk1URWlMQ0owYjJ0bGJsOXJaWGxmTVNJNklqa3dPVEF6TWpFeU9UTXhZMkZsTUdJMk1tSXhNREl6WkRCalpETTFOV0V4WWpNME9HTTFNVFkwTnpZMVlqRmlNMlV3TVRoaE5qUTVOems0WkdKbVl6UmxOalV5WlRnNU1TSXNJblJ2YTJWdVgydGxlVjh5SWpvaU1UWmpNMk15WkRCbE5XRTRPRFUxTlRrelpqYzFOMkkyTWpSak1HSTJZamcwTVRJMVpEVXdOaUo5"
//   },
//   "referrer": "https://sipd-ri.kemendagri.go.id/",
//   "referrerPolicy": "strict-origin",
//   "body": "------WebKitFormBoundaryfPdkFP2NrAcEz7G6\r\nContent-Disposition: form-data; name=\"tahun\"\r\n\r\n2024\r\n------WebKitFormBoundaryfPdkFP2NrAcEz7G6\r\nContent-Disposition: form-data; name=\"id_daerah\"\r\n\r\n416\r\n------WebKitFormBoundaryfPdkFP2NrAcEz7G6\r\nContent-Disposition: form-data; name=\"id_unit\"\r\n\r\n2\r\n------WebKitFormBoundaryfPdkFP2NrAcEz7G6\r\nContent-Disposition: form-data; name=\"is_prop\"\r\n\r\n0\r\n------WebKitFormBoundaryfPdkFP2NrAcEz7G6\r\nContent-Disposition: form-data; name=\"is_anggaran\"\r\n\r\n0\r\n------WebKitFormBoundaryfPdkFP2NrAcEz7G6--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });

// tahun: 2024
// id_daerah: 416
// id_sub_bl: 20198
// id_unit: 2
// is_anggaran: 0
// fetch("https://sipd-ri.kemendagri.go.id/api/renja/rinci_sub_bl/get_by_id_sub_bl", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundary80MwRqSoVuHVYuRy",
//     "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Microsoft Edge\";v=\"121\", \"Chromium\";v=\"121\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY5ODIzNTksImhhc2hlZCI6dHJ1ZSwiaWRfZGFlcmFoIjo0MTYsImlkX2xldmVsIjo1LCJpZF91c2VyIjo1ODB9.Gi0eLRnADeZNUzHtWQiSNFEKgEzEM_ksmlQyu4idsmw",
//     "x-api-key": "ZXlKMGIydGxiaUk2SW1GbFMxVnpNelJNZWxkRU16aFhXaUlzSW1sa1gyUmhaWEpoYUNJNk5ERTJMQ0owWVdoMWJpSTZNakF5TkN3aWFXUmZZWEJ3SWpvNU5UazFNQ3dpYVhOZllYQndJam94TENKelpXTnlaWFJmYTJWNUlqb2lXbGhzUzJWdFJsaFZhbEpLWVcwNWNGWnJaRFJWTWtwMFZXcE9VVlpFUW5CVVJVNUxaVzFHV0ZWdVRrcGhiVGx3Vm10a05GSnJPVmRSYkVwUlZrUkNjRlJGVGt0bGJVWllWVzEwU21GdE9YQldhMlF3VlRGS2NrMVhOVkZXUkVKd1ZFVk9TMk5HY0VoVlYyeFFZVlZ3VmxsVVJrdFNNVkpZV1hwc1VWVXdielVpTENKelpXTjFjbWwwZVY5clpYa2lPaUkwTVRaOE1qQXlOSHhOVkdOM1RtcHJNMDlVWjNsTlFUMDlmRzV2Y1ZoWmIyRnZZWE44T1RJeU1UY2lMQ0owYjJ0bGJsOXJaWGxmTVNJNklqa3dPVEF6TWpFeU9UTXhZMkZsTUdJMk1tSXhNREl6WkRCalpETTFOV0V4WWpNME9HTTFNVFkwTnpZMVlqRmlNMlV3TVRoaE5qUTVOems0WkdKbVl6UmxOalV5WlRnNU1TSXNJblJ2YTJWdVgydGxlVjh5SWpvaU1UWmpNMk15WkRCbE5XRTRPRFUxTlRrelpqYzFOMkkyTWpSak1HSTJZamcwTVRJMVpEVXdOaUo5"
//   },
//   "referrer": "https://sipd-ri.kemendagri.go.id/",
//   "referrerPolicy": "strict-origin",
//   "body": "------WebKitFormBoundary80MwRqSoVuHVYuRy\r\nContent-Disposition: form-data; name=\"tahun\"\r\n\r\n2024\r\n------WebKitFormBoundary80MwRqSoVuHVYuRy\r\nContent-Disposition: form-data; name=\"id_daerah\"\r\n\r\n416\r\n------WebKitFormBoundary80MwRqSoVuHVYuRy\r\nContent-Disposition: form-data; name=\"id_sub_bl\"\r\n\r\n20198\r\n------WebKitFormBoundary80MwRqSoVuHVYuRy\r\nContent-Disposition: form-data; name=\"id_unit\"\r\n\r\n2\r\n------WebKitFormBoundary80MwRqSoVuHVYuRy\r\nContent-Disposition: form-data; name=\"is_anggaran\"\r\n\r\n0\r\n------WebKitFormBoundary80MwRqSoVuHVYuRy--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });