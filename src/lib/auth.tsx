export type DummyUser = {
  password: string; email: string; role: 'admin' | 'user' 
};

const KEY = 'sihi_user_v1';

export function saveUser(user: DummyUser) {
  try {
    localStorage.setItem(KEY, JSON.stringify(user));
  } catch (e) {
    console.error('saveUser error', e);
  }
}

export function getUser(): DummyUser | null {
  try {
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) : null;
  } catch (e) {
    console.error('getUser error', e);
    return null;
  }
}

export function removeUser() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    console.error('removeUser error', e);
  }
}
