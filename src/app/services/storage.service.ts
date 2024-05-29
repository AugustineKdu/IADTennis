import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Method to initialize the storage
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Method to set a value in storage
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  // Method to get a value from storage
  public async get(key: string) {
    return await this._storage?.get(key);
  }

  // Method to remove a value from storage
  public async remove(key: string) {
    await this._storage?.remove(key);
  }
}
