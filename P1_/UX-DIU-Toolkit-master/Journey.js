/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Juan Ballesteros",
                Photo: "0.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere ir a trabajar a Málaga compartiendo su coche para reducir costes",
                touch1: "A través de un amigo",
                feel1: "4",
                con1: "Buscar la aplicación en el movil e instalarla. Recurre a su hijo.",
                ima1: "cartoon-speaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide darse de alta en la aplicación y registra sus datos y su coche.",
                touch2: "App/web",
                feel2: "3",
                con2: "No le resulta difícil el registro pero le cuesta introducir los datos de su vehículo porque no encontraba la opción.",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Publica el viaje Granada-Málaga para compartir su coche un dia determinado.",
                touch3: "App/web",
                feel3: "4",
                con3: "Está preocupado por la hora de salida y llegada.",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Espera a ver si se registra gente en su viaje y que tipo de gente.",
                touch4: "App/web",
                feel4: "3",
                con4: "Está preocupado por si nadie le solicita compartir el viaje y también está pendiente de las solicitudes para aceptar o rechazar a los pasajeros. ",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Le solicitan 9 pasajeros el viaje y acepta a 4 de ellos, ya que el coche tiene 5 asientos.",
                touch5: "App/web",
                feel5: "5",
                con5: "Contactar con ellos para pedir que sean puntuales y que el lugar de destino no se modifique.",
                ima5: "cartoon-deciding2.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Realiza el viaje satisfactoriamente y va a hacerlo cada día.",
                touch6: "App -> Valoración",
                feel6: "5",
                con6: "Hubo un retraso de un pasajero por lo que llegó con el tiempo justo a su trabajo.",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Asuka Hashimoto",
                Photo: "Japonesa.jpg",
                
				/*** PASO #1: INSPIRACION ***/ 
                goal1: "Para algunos trayectos del viaje prefiere compartir coche",
                touch1: "Redes sociales",
                feel1: "5",
                con1: "Le genera desconfianza el hecho de montarse en coches de gente que no conoce",
                ima1: "cartoon-phone-sitting.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide darse de alta en la aplicación y registra sus datos",
                touch2: "App/web",
                feel2: "4",
                con2: "No tiene problemas para efectuar el registro.",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca y solicita viajes publicados los días que necesita desplazarse y que le convezcan.",
                touch3: "App/web",
                feel3: "3",
                con3: "Por ahora no le salen apenas viajes publicados para las fechas introducidas porque quedan aun días.",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se mantiene a la espera de que la acepten en los viajes que ha solicitado.",
                touch4: "App/web",
                feel4: "3",
                con4: "Le preocupa que le rechazen algun viaje.",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Le aceptan los viajes solicitados excepto uno.",
                touch5: "App/web",
                feel5: "5",
                con5: "Busca rápidamente un viaje ya que le falta el que le lleva al aeropuerto el último día de su viaje.",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Realiza 3 de los 5 desplazamienos solicitados y no queda satisfecha del todo",
                touch6: "App",
                feel6: "2",
                con6: "En el tercer viaje el coche se averió lo que le influyó en el cuarto que llegó a perderlo y esto le retraso toda su planificación del viaje",
                ima6: "cartoon-sad.png",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



