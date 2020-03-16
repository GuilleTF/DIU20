/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Juan Ballesteros",
				Photo: "0.jpeg",
				Quote: "Persigue tus sueños",
				Age: 41,
				Occupation: "Arquitecto",
				Family: "Casado con dos hijos",
				Location: "Granada",
				Character: "Le gusta innovar en sus proyectos observando la arquitectura de los edificios ",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Pasar todo el tiempo posbile con su familia","Graduarse en historia del arte", "Montar su propia empresa de arquitectos en Granada"],
				Frustrations: ["Odia el desorden", "Le molesta cuando le echan para atrás un diseño", "Ve mucha utilidad en los avances tecnológicos, pero siempre recurre a sus hijos cuando no sabe abordar algo con este tema", "Le gustaría trabajar en Granada, pero en el puesto actual tiene una remuneración mucho mejor en Málaga"],
				Bio: " Vive en Granada con su mujer y sus dos hijos, pero de Lunes a Viernes viaja a Málaga por su trabajo, en el que lleva seis años. Tiene ganas de montar su propio estudio de arquitectura en Granada, ya que le quita mucho tiempo su trabajo actual, aunque le daría mucha pena ya que en estos años ha hecho muy buenos amigos allí y está muy contento con su trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "Reducir costes en cada viaje a Málaga",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Asuka Hashimoto",
				Photo: "Japonesa.jpg",
				Quote: "Hasta el viaje más largo comienza con un solo paso",
				Age: 27,
				Occupation: "Profesora de primaria",
				Family: "Soltera",
				Location: "Tokio",
				Character: "Extrovertida, moderna y muy habladora.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Viajar y conocer nuevos lugares y culturas", "Hablar varios idiomas","Motivar a sus alumnos","Tener un hij@ en un futuro próximo"],
				Frustrations: ["Muy perfeccionista", "No entiende bien el español", "Le gustaría tener más dinero"],
				Bio: "Nació en Kioto donde se sacó su carrrera en educación, vive actualmente en Tokio con sus padres. Está muy contenta con su trabajo. Tiene ganas de independizarse y en no mucho tiempo empezar a formar una familia. Aprovehca todo su tiempo libre para viajar.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Ahorrar costes durante el viaje y no tener que coger transporte público" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
