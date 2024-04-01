class Hotel {
    constructor(data) {
        this.id = data.id || 0;
        this.name = data.name || '';
        this.phone = data.phone || '';
        this.type = ObjectType.HOTEL;
        this.address = data.address || '';
        this.city  = data.city || '';
        this.country  = data.country || '';
        this.price = data.price || 0;
        this.isAvailable  = data.isAvailable || false
        this.rating  = data.rating || 5;
        this.description  = data.description || null;
    }
}