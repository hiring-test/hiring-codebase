package com;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class MyInterview {

	private String name = "AAA";

	private static int age;

	public static void main(String[] string) {
		System.out.println("");
		String name = new String("HHH");
		System.out.println("My Name" + name);
		doPreWork();

		try {
			displayApplication();
			doServiceCall();
			displayApplication();

		} catch (FileNotFoundException | IOException e) {
			e.printStackTrace();

		}

		doPostWork();

	}

	public void doServiceCall() {

		try {

			URL url = new URL("http://localhost:8080/myInterview/json/product/get");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}

		} catch (MalformedURLException e) {

			e.printStackTrace();

		} catch (IOException e) {

			e.printStackTrace();

		}

	}

	public static void doMath() {
		System.out.println("Doing your math......" + (10 / age));
	}

	public static void displayApplication() throws IOException, FileNotFoundException {
		System.out.println("Some message......");
	}

	public static void doPostWork() {
		System.out.println("Hi I am doing some doPostWork for you.");
	}

	public static void doPreWork() throws NullPointerException {
		String name;
		System.out.println("Hi I am doing some pre-work for you." + name.length());

	}

}
