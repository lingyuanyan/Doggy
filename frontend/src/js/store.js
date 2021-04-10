class MemStore {
  fillDoggy(doggy){
    this.doggy = doggy;
  }
  fetchDoggy(){
    return this.doggy;
  }
}

const memStore = new MemStore();

export {memStore};
