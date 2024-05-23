import { User } from  '@/types/user';
import { Gift } from '@/types/gift';
import { Wishlist } from '@/types/wishlist';
import { Wish} from "@/types/wish";
import {json} from "node:stream/consumers";
// import wishlist from "@/components/wishlist/wishlist";
import {Photo} from "@/types/photo";
import {Credentionals} from "@/types/credentionals";
import { log } from 'console';


const BASE = 'http://84.38.183.178:7070'

export async function fetchWishes(): Promise<Gift[]> {
    let wishlistID = localStorage.getItem("wishlistID");
    if (wishlistID && wishlistID.startsWith('"') && wishlistID.endsWith('"')) {
        wishlistID = wishlistID.slice(1, -1);
    }

    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1);
    }

        const res = await fetch(`${BASE}/wishes/${wishlistID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken ? authToken : ''
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch wish');
        }

        return await res.json()


}
export async function DeleteWishlist(id: string): Promise<void> {
    const res = await fetch(`${BASE}/wishes/${id}`, {})
    return  res.json()
}


export async function CreateWish(wish: Wish): Promise<Wish> {

    let giftID = localStorage.getItem("giftID");
    if (giftID && giftID.startsWith('"') && giftID.endsWith('"')) {
        giftID = giftID.slice(1, -1);
    }

    let wishlistID = localStorage.getItem("wishlistID");
    if (wishlistID && wishlistID.startsWith('"') && wishlistID.endsWith('"')) {
        wishlistID = wishlistID.slice(1, -1);
    }

    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1);
    }

    const res = await fetch(`${BASE}/${giftID}/${wishlistID}`, {
        method: 'GET',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': 'session_cnvdk9k69lbm5c1vej1g'
        },

        body: JSON.stringify({
            giftID: giftID,
            wishlistID: wishlistID
        })
    });

    if (!res.ok) {
        throw new Error('Failed to fetch wish');
    }

    return await res.json()

}

export async function fetchWishlists(): Promise<Wishlist[]> {
     let authToken = localStorage.getItem("user");
     console.log(authToken)
     if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
         authToken = authToken.slice(1, -1);
     }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken? authToken : ''
        }

        });

    if (!res.ok) {
        throw new Error('Failed to fetch wishlists');
    }

    return res.json()


}

export async function fetchUser(): Promise<User[]> {
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1);
    }

    const userID = localStorage.getItem("userID");
    if (!userID) {
        throw new Error('User ID not found in local storage');
    }

    const res = await fetch(`${BASE}/users/${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch user');
    }
    return res.json();
}



export async function RegisterUser(newUser: User): Promise<User> {
    const res = await fetch(`${BASE}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: newUser.Name,
            LastName: newUser.LastName,
            Login: newUser.Login,
            Birthday: newUser.Birthday,
            Password: newUser.Password,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка во время выполнения запроса на регистрацию пользователя");
    }

    const session = await res.json(); // Разбираем JSON-ответ
    const sessionId = session.id.replace(/"/g, ''); // Обрабатываем sessionId
    localStorage.setItem("user", sessionId);

    return session; // Возвращаем разобранный JSON-объект
    
}

export async function CreateGift(newGift: Gift): Promise<Gift> {
    // let wishlist_id = localStorage.getItem("wishlistID");
    const price = newGift.price
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
        const res = await fetch(`${BASE}/gifts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'session_cp4ahofnnsjf4mhn7ufg'
            },
            body: JSON.stringify({
                name: newGift.name,
                price: Number(price),
                photo: newGift.photo,
                description: newGift.description,
                link: newGift.link,
            })
        });

    console.log('у меня памяти 16 мегабайт' + JSON.stringify({
        name: newGift.name,
        price: newGift.price,
        photo: newGift.photo,
        description: newGift.description,
        link: newGift.link}))

    if (!res.ok) {
        throw new Error("Failed to create wish");
    }

    const gift = await res.json(); // Разбираем JSON-ответ
    const giftID = gift.id.replace(/"/g, ''); // Обрабатываем sessionId
    localStorage.setItem("giftID", giftID);

    return gift;
}

export async function LoginUser(credentials: { login: string, password: string }): Promise<User> {
    const res = await fetch(`${BASE}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(credentials)
    });

    if (!res.ok) {
        throw new Error("Ошибка во время выполнения запроса на вход");
    }

    const session = await res.json();
    const sessionId = session.id.replace(/"/g, ''); // Убедимся, что sessionId необходимо обработать правильным образом
    console.log (sessionId)
    localStorage.setItem("user", sessionId);
    localStorage.setItem("userID", session.userID); // предполагаем, что session содержит userID

    return session;
}


export async function getPhoto(): Promise<Photo[]> {
    let category =  localStorage.getItem("category");
    if (category && category.startsWith('"') && category.endsWith('"')) {
        category = category.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    let id = localStorage.getItem("photoId");
    if (id && id.startsWith('"') && id.endsWith('"')) {
        id = id.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }

    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const res = await fetch(`${BASE}/${category}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'session_cp4ahofnnsjf4mhn7ufg'
        },
    })
    if (!res.ok) {
        throw new Error('Failed to load photo')
    }

    return await res.json()
}


export async function uploadPhoto (newPhoto: Photo): Promise<Photo> {
    const category =  localStorage.getItem("category");
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }

    const res = await fetch(`${BASE}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'session_cp4ahofnnsjf4mhn7ufg'
        },
        body: JSON.stringify({
            photo: newPhoto.photo,
            category: category,
        })
    });
    if (!res.ok) {
        throw new Error("Failed to upload photo");
    }

    return await res.json()

}

export async function CreateWishlist(newWishlist: Wishlist): Promise<Wishlist> {
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'session_cp4ahofnnsjf4mhn7ufg'
        },
        body: JSON.stringify({
            Name: newWishlist.name,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка в создании пользователя");
    }

    return await res.json();
}




