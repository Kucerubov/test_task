import PreviewCourse from "../component/PreviewCourse";

export const API_URl = 'https://api.wisey.app/api/v1/';

export function getToken(){
    return fetch(`${API_URl}auth/anonymous?platform=subscriptions`)
        .then(response => response.json())
        .then(data => localStorage.setItem('token', data.token));
}

export default function getCourses() {
    return getToken().then(() => {
        return fetch(`${API_URl}core/preview-courses`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => data);
    });
}

export function getCourse(id) {
    return getToken().then(() => {
        console.log(id);
            return fetch(`${API_URl}core/preview-courses/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    return data;
                });
        });
}
