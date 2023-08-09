/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { getData } from './feature/firebase';

@Injectable()
export class AppService {
  getHello(): string {
    // getData();
    // addData('ini adalah quote', 'bimbim');
    return 'Hello World!';
  }
  all(): object {
    return data;
  }
  random(): object {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
  }
  daily(): object {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const id = month * 31 + day;
    return data[id];
  }
  id(id: number): object {
    return data[id - 1];
  }
}

const data = [
  {
    id: 1,
    quote:
      'Hidup bukanlah tentang ‘Aku Bisa Saja’, namun tentang ‘Aku Mencoba’. Jangan pikirkan tentang kegagalan, itu adalah pelajaran.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 2,
    quote:
      'Kematian adalah yang terakhir dalam waktu tetapi sekaligus yang awal dari kekalahan.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 3,
    quote:
      'Percaya dan yakinlah bahwa kemerdekaan satu negara yang didirikan di atas timbunan runtuhan ribuan jiwa, harta benda dari rakyat dan bangsanya tidak akan dapat dilenyapkan oleh manusia, siapa pun juga.',
    author: 'Jenderal Soedirman',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 4,
    quote:
      'Terkadang, kesulitan harus kamu rasakan terlebih dulu sebelum kebahagiaan yang sempurna datang kepadamu.',
    author: 'R. A. Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 5,
    quote:
      'Jika kalian ingin menjadi pemimpin besar, menulislah seperti wartawan dan bicaralah seperti orator.',
    author: 'H.O.S Tjokroaminoto',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 6,
    quote:
      'Gadis yang pikirannya sudah dicerdaskan, pemandangannya sudah diperluas, tidak akan sanggup lagi hidup di dalam dunia nenek moyangnya.',
    author: 'R. A Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 7,
    quote:
      'Indonesia merdeka bukan tujuan akhir kita. Indonesia merdeka hanya syarat untuk bisa mencapai kebahagiaan dan kemakmuran rakyat.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 8,
    quote:
      'Berapapun cepatnya kebohongan itu, namun kebenaran akan mengejarnya juga.',
    author: 'Tan Malaka',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 9,
    quote:
      'Kejahatan akan menang bila orang yang benar tidak melakukan apa-apa.',
    author: 'Jenderal Sudirman',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 10,
    quote:
      'Kalau ingin melakukan perubahan jangan tunduk terhadap kenyataan, asalkan kau yakin di jalan yang benar maka lanjutkan.',
    author: 'Gus Dur (KH Abdurrahman Wahid)',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 11,
    quote:
      'Kemerdekaan nasional bukan pencapaian akhir, tapi rakyat bebas berkarya adalah pencapaian puncaknya',
    author: 'Sutan Syahrir',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 12,
    quote:
      'Pahlawan yang setia itu berkorban, bukan buat dikenal namanya, tetapi semata-mata membela cita-cita. Selamat Hari Pahlawan',
    author: 'Mohammad Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 13,
    quote:
      'Selama banteng-banteng indonesia masih mempunyai darah merah, yang bisa membikin secarik kain putih menjadi merah putih, Maka selama itu kita tidak akan menyerah kepada siapapun juga. Selamat Hari Pahlawan.',
    author: 'Bung Tomo',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 14,
    quote:
      'Kemerdekaan nasional adalah bukan pencapaian akhir, tapi rakyat bebas berkarya adalah pencapaian puncaknya.',
    author: 'Sutan Syahrir',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 15,
    quote:
      'Agar persatuan dan kepedulian tak makin pudar, teruslah menjunjung tinggi sila ketiga Pancasila, Persatuan Indonesia.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 16,
    quote:
      'Terkadang, kesulitan harus kamu rasakan terlebih dulu sebelum kebahagiaan yang sempurna datang kepadamu.',
    author: 'R. A Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 17,
    quote:
      'Bangsa yang tidak percaya kepada kekuatan dirinya sebagai suatu bangsa, tidak dapat berdiri sebagai suatu bangsa yang merdeka.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 18,
    quote:
      'Biarlah pengalaman masa lalu kita menjadi tonggak petunjuk, dan bukan tonggak yang membelenggu kita.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 19,
    quote:
      'Dalam menghadapi musuh, tak ada yang lebih mengena daripada senjata kasih sayang.',
    author: 'Cut Nyak Dhien',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 20,
    quote:
      'Berapapun cepatnya kebohongan itu, namun kebenaran akan mengejarnya juga.',
    author: 'Tan Malaka',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 21,
    quote:
      'Ingatlah! Bahwa dari dalam kubur, suara saya akan lebih keras daripada dari atas bumi.',
    author: 'Tan Malaka',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 22,
    quote:
      'Tidak ada kemarahan yang begitu berpengaruh seperti pengaruh dari teladan yang baik.',
    author: 'Cut Nyak Dhien',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 23,
    quote:
      'Kita tunjukkan bahwa kita adalah benar-benar orang yang ingin merdeka. Lebih baik kita hancur lebur daripada tidak merdeka.',
    author: 'Bung Tomo',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 24,
    quote:
      'Cita-cita persatuan Indonesia itu bukan omong kosong, tetapi benar-benar didukung oleh kekuatan-kekuatan yang timbul pada akar sejarah bangsa kita sendiri.',
    author: 'Mohammad Yamin',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 25,
    quote:
      "Seorang perempuan yang mengorbankan diri untuk orang lain, dengan segala rasa cinta yang ada dalam hatinya, dengan segala bakti, yang dapat diamalkannya, itulah perempuan yang patut disebut sebagai 'ibu' dalam arti sebenarnya.",
    author: 'R. A Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 26,
    quote:
      'Biarlah pengalaman masa lalu kita menjadi tonggak petunjuk, dan bukan tonggak yang membelenggu kita.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 27,
    quote:
      'Kematian adalah yang terakhir dalam waktu tetapi sekaligus yang awal dari kekalahan.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 28,
    quote:
      'Agar persatuan dan kepedulian tak makin pudar, teruslah menjunjung tinggi sila ketiga Pancasila, Persatuan Indonesia.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 29,
    quote:
      'Terkadang, kesulitan harus kamu rasakan terlebih dulu sebelum kebahagiaan yang sempurna datang kepadamu.',
    author: 'R. A Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 30,
    quote:
      'Aku ini bukan apa-apa kalau tanpa rakyat. Aku besar karena rakyat, berjuang karena rakyat, dan aku penyambung lidah rakyat.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 31,
    quote:
      'Kita belum hidup dalam sinar bulan purnama, kita masih hidup di masa pancaroba. Jadi tetaplah bersemangat elang rajawali.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 32,
    quote:
      'Kita bangsa besar, kita bukan bangsa tempe. Kita tidak akan mengemis, kita tidak akan minta-minta, apalagi jika bantuan-bantuan itu diembel-embeli dengan syarat ini syarat itu! Lebih baik makan gaplek tetapi merdeka, daripada makan bistik tapi budak.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 33,
    quote:
      'Indonesia merdeka bukan tujuan akhir kita. Indonesia merdeka hanya syarat untuk bisa mencapai kebahagiaan dan kemakmuran rakyat.',
    author: 'Bung Hatta',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 34,
    quote:
      'Hamba-hamba Allah penghuni surgawi, harus menggunakan bahasa yang halus dan sopan.',
    author: 'Ibnu Sina',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 35,
    quote:
      'Satu kelas atas satu bangsa yang tidak mampu melemparkan peraturan-peraturan kolot serta perbudakan dengan perantaraan revolusi, niscaya musnah atau ditakdirkan menjadi budak buat selama-lamanya.',
    author: 'Tan Malaka',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 36,
    quote:
      'Banyak hal yang bisa menjatuhkanmu. Tapi satu-satunya hal yang benar-benar dapat menjatuhkanmu adalah sikapmu sendiri.',
    author: 'R. A Kartini',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 37,
    quote:
      'Cuma sedikit orang yang rela menjadi kecil, sehingga bisa dipakai oleh Allah untuk melewati lubang-lubang ujian yang sempit.',
    author: 'Cut Nyak Dhien',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 38,
    quote:
      'Berpedomanlah pada harapan dan ketetapan hati. Berpedomanlah pada cita-cita, berpedomanlah pada impian dan angan-angan.',
    author: 'IR. Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 39,
    quote:
      'Pada akhirnya pastilah kemenangan akan jatuh ke tangan kita. Sebab Allah selalu berada di pihak yang benar. Percayalah saudara-saudara, Tuhan akan melindungi kita sekalian.',
    author: 'Bung Tomo',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 40,
    quote:
      'Kejahatan akan menang bila orang yang benar tidak melakukan apa-apa.',
    author: 'Jenderal Soedirman',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 41,
    quote:
      'Untuk mencapai sesuatu, harus diperjuangkan dulu. Seperti mengambil buah kelapa, dan tidak menunggu saja seperti jatuh durian yang telah masak.',
    author: 'Mohammad Natsir',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 42,
    quote:
      'Kita belum hidup dalam sinar bulan purnama, kita masih hidup di masa pancaroba. Jadi, tetaplah bersemangat elang rajawali.',
    author: 'Soekarno',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
  {
    id: 43,
    quote:
      'Cita-cita persatuan Indonesia itu bukan omong kosong, tetapi benar-benar didukung oleh kekuatan-kekuatan yang timbul pada akar sejarah bangsa kita sendiri.',
    author: 'Moh Yamin',
    category: 'inspiration',
    date: '2023-08-08',
    source:
      'https://www.brilio.net/wow/75-kata-kata-mutiara-dari-para-pahlawan-inspiratif-dan-memotivasi-211110l.html',
  },
];
