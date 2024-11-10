import { create } from "zustand";

class AuthState {
  jwt: string | null = null;
  isLoggedIn: boolean = false;
  setJWT(jwt: string): void {
    this.jwt = jwt;
    this.isLoggedIn = true;
  }
  clearJWT(): void {
    this.jwt = null;
    this.isLoggedIn = false;
  }
}

export const useAuthStore = create(() => new AuthState());
