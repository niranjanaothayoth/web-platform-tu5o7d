// Progression 1: SmartPhone

class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    return this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave) {
    this.price -= priceIHave;
    if (this.price <= 0) {
      return 'Customer has no more amount';
    } else {
      return (
        'Customer has remaining Rs.' + this.price + ' after buying the phone'
      );
    }
  }
}

// Progression 2: AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }

  displayFeatures() {
    return (
      this.modelName +
      '\n' +
      this.ram +
      '\n' +
      this.batteryPower +
      '\n' +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    this.price -= priceIHave;
    if (this.price <= 0) {
      return 'Customer has no more amount';
    } else {
      return (
        'Customer has remaining Rs.' +
        this.price +
        ' after buying the Android phone'
      );
    }
  }
}

// Progression 3: IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }

  displayFeatures() {
    return (
      this.seriesName +
      '\n' +
      this.ram +
      '\n' +
      this.batteryPower +
      '\n' +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    if (priceIHave >= this.price) {
      this.price -= priceIHave;
      return (
        'Customer has remaining Rs.' + this.price + ' after buying an iPhone'
      );
    } else {
      return "Customer can't able to buy a phone due to insufficient amount";
    }
  }
}

// Progression 4: MobileCampus

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }

  changeMobileAvailabilityNumber(count, type) {
    if (type === 'android') {
      this.NoOfAndroidMobiles -= count;
      return 'Available android mobiles are ' + this.NoOfAndroidMobiles;
    }
    if (type === 'iphone') {
      this.NoOfIPhoneMobiles -= count;
      return 'Available iPhone mobiles are ' + this.NoOfIPhoneMobiles;
    }
  }
}
