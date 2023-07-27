package com.wepr.booking.model;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tour")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tourID;
    private String tourName;
    private Double tourPrice;
    private Double tourOldPrice;
    private Boolean policy;
    private String tourDescription;
    private String tourSchedule;
    private String defaultImage;
    @ManyToOne
    @JoinColumn(name = "placeID")
    private Place place;
//    @OneToMany(mappedBy = "tour")
//    private List<User_Tour_Comment> userTourComments;
//
//    public List<User_Tour_Comment> getUserTourComments() {
//        return userTourComments;
//    }
//
//    public void setUserTourComments(List<User_Tour_Comment> userTourComments) {
//        this.userTourComments = userTourComments;
//    }


    public Integer getTourID(){ return tourID; }
    public void setTourID(Integer tourID){ this.tourID = tourID; }
    public String getTourName(){return tourName;}
    public void setTourName(String tourName){this.tourName = tourName;}
    public  Double getTourPrice(){return tourPrice;}
    public void setTourPrice(Double tourPrice){this.tourPrice = tourPrice;}
    public Double getTourOldPrice(){return tourOldPrice;}
    public void setTourOldPrice(Double tourOldPrice){this.tourOldPrice = tourOldPrice;}

    public Boolean getPolicy() {
        return policy;
    }

    public void setPolicy(Boolean policy) {
        this.policy = policy;
    }

    public String getTourDescription() {
        return tourDescription;
    }

    public void setTourDescription(String tourDescription) {
        this.tourDescription = tourDescription;
    }

    public String getTourSchedule() {
        return tourSchedule;
    }

    public void setTourSchedule(String tourSchedule) {
        this.tourSchedule = tourSchedule;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }
    public String getDefaultImage() {
        return defaultImage;
    }

    public void setDefaultImage(String defaultImage) {
        this.defaultImage = defaultImage;
    }
}
