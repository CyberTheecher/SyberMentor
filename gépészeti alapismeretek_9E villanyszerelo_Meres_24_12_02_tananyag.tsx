import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Ruler, 
  Calculator, 
  ClipboardCheck,
  FileText,
  Wrench,
  ListChecks 
} from 'lucide-react';

const LearningApp = () => {
  const [activeSection, setActiveSection] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const sections = [
    {
      id: 'situation',
      title: 'Feladat Szituáció',
      icon: FileText,
      content: [
        {
          title: 'Kiinduló helyzet',
          description: `Egy új építésű családi ház nappalijában kell elhelyezni az elosztószekrényt és a hozzá tartozó kábelcsatornát. A megrendelő kérése, hogy az elosztószekrény a bejárati ajtóval szemközti falon legyen, és a kábelcsatorna a lehető legkevésbé legyen szembetűnő.`,
          items: []
        },
        {
          title: 'Helyiség adatai',
          description: 'A nappali méretei:',
          items: [
            'Szélesség: 4,2 méter',
            'Hosszúság: 3,6 méter',
            'Belmagasság: 2,7 méter',
            'Ajtó: bal oldalon, 90 cm széles',
            'Ajtó magasság: 2,1 méter'
          ]
        }
      ]
    },
    {
      id: 'requirements',
      title: 'Szerelési Előírások',
      icon: Wrench,
      content: [
        {
          title: 'Elosztószekrény',
          description: 'Beépítési követelmények:',
          items: [
            'Méret: 40 cm × 60 cm (szélesség × magasság)',
            'Alsó él magassága: 140 cm a padlószinttől',
            'Elhelyezés: szemközti fal középvonalában',
            'Min. távolság az ajtótól: 20 cm',
            'Betáplálás helye: bal felső sarok, mennyezettől 20 cm',
            'Elosztószekrényhez csatlakozás: felső él közepén'
          ]
        },
        {
          title: 'Kábelcsatorna',
          description: 'Szerelési előírások:',
          items: [
            'Méret: 6 cm × 4 cm (szélesség × magasság)',
            'Rögzítési pontok: maximum 50 cm-enként',
            'Mennyezettől való távolság: 15 cm',
            'Sarkoknál 90°-os idom használata',
            'Toldásoknál min. 2 cm átfedés'
          ]
        }
      ]
    },
    {
      id: 'task',
      title: 'Feladatok',
      icon: ListChecks,
      content: [
        {
          title: 'Rajzolási feladatok',
          description: 'Készítendő dokumentumok:',
          items: [
            'Alaprajz 1:50 méretarányban',
            'Elosztószekrény helyének bejelölése',
            'Kábelcsatorna nyomvonal rajz',
            'Rögzítési pontok bejelölése'
          ]
        },
        {
          title: 'Számítási feladatok',
          description: 'Meghatározandó értékek:',
          items: [
            'Kábelcsatorna teljes hossza (m)',
            'Rögzítési pontok száma (db)',
            'Szükséges kábelcsatorna elemek (2m-es szálak)',
            'Rögzítőelemek száma (pontok × 2 csavar)',
            'Sarkok száma (külső/belső)',
            'Anyagszükséglet 10% ráhagyással'
          ]
        }
      ]
    },
    {
      id: 'evaluation',
      title: 'Értékelési Szempontok',
      icon: ClipboardCheck,
      content: [
        {
          title: 'Rajz értékelése (40 pont)',
          description: 'Szempontok:',
          items: [
            'Méretarány pontossága (0-10 pont)',
            'Méretezés szakszerűsége (0-10 pont)',
            'Rajz kivitelezése (0-10 pont)',
            'Szabványos jelölések (0-10 pont)'
          ]
        },
        {
          title: 'Számítások (40 pont)',
          description: 'Részpontszámok:',
          items: [
            'Kábelcsatorna hossz számítása (0-10 pont)',
            'Rögzítési pontok meghatározása (0-10 pont)',
            'Anyagmennyiség számítása (0-10 pont)',
            'Ráhagyás kalkuláció (0-10 pont)'
          ]
        },
        {
          title: 'Dokumentálás (20 pont)',
          description: 'Értékelési szempontok:',
          items: [
            'Mérési jegyzőkönyv (0-10 pont)',
            'Anyagszükségleti lista (0-10 pont)'
          ]
        }
      ]
    },
    {
      id: 'solution',
      title: 'Megoldási Útmutató',
      icon: Calculator,
      content: [
        {
          title: 'Kábelcsatorna számítás',
          description: 'Példa számítás:',
          items: [
            'Vízszintes szakasz: 4,2 m + 3,6 m = 7,8 m',
            'Függőleges szakasz: 2,7 m - 0,15 m = 2,55 m',
            'Teljes kábelcsatorna hossz: 10,35 m',
            'Ráhagyással (10%): 11,4 m',
            'Szükséges szálak: 6 db (2m-es)',
            'Szükséges sarokelemek: 3 db (2 db külső, 1 db belső)'
          ]
        },
        {
          title: 'Rögzítési pontok',
          description: 'Számítás menete:',
          items: [
            'Pontok száma: 10,35 m ÷ 0,5 m = 21 db',
            'Csavarok száma: 21 × 2 = 42 db',
            'Biztonsági ráhagyás: +4 db csavar',
            'Végső csavarszám: 46 db'
          ]
        }
      ]
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? '' : id);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Villanyszerelő Feladatlap</h1>
        <p className="text-sm">9. évfolyam - Elosztószekrény és kábelcsatorna szerelés</p>
      </div>

      <div className="divide-y divide-gray-200">
        {sections.map((section) => (
          <div key={section.id} className="cursor-pointer">
            <div
              className="flex items-center p-4 hover:bg-gray-50"
              onClick={() => toggleSection(section.id)}
            >
              <section.icon className="w-6 h-6 text-blue-600 mr-3" />
              <span className="flex-grow font-medium">{section.title}</span>
              {activeSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {activeSection === section.id && (
              <div className="p-4 bg-gray-50">
                {section.content.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    {item.items.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-gray-600">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <p className="text-sm text-gray-600 text-center">
          Osztályzás: 80-100%: 5 | 70-79%: 4 | 60-69%: 3 | 50-59%: 2 | 0-49%: 1
        </p>
      </div>
    </div>
  );
};

export default LearningApp;